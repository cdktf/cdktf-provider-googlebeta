# `googleNetworkServicesHttpRoute` Submodule <a name="`googleNetworkServicesHttpRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesHttpRoute <a name="GoogleNetworkServicesHttpRoute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route google_network_services_http_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute(scope: Construct, id: string, config: GoogleNetworkServicesHttpRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig">GoogleNetworkServicesHttpRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig">GoogleNetworkServicesHttpRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetMeshes">resetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleNetworkServicesHttpRouteRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesHttpRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetGateways"></a>

```typescript
public resetGateways(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMeshes` <a name="resetMeshes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetMeshes"></a>

```typescript
public resetMeshes(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesHttpRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesHttpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesHttpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList">GoogleNetworkServicesHttpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference">GoogleNetworkServicesHttpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gatewaysInput">gatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnamesInput">hostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshesInput">meshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gateways">gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshes">meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rules"></a>

```typescript
public readonly rules: GoogleNetworkServicesHttpRouteRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList">GoogleNetworkServicesHttpRouteRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesHttpRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference">GoogleNetworkServicesHttpRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gatewaysInput"></a>

```typescript
public readonly gatewaysInput: string[];
```

- *Type:* string[]

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnamesInput"></a>

```typescript
public readonly hostnamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `meshesInput`<sup>Optional</sup> <a name="meshesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshesInput"></a>

```typescript
public readonly meshesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleNetworkServicesHttpRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesHttpRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesHttpRouteConfig <a name="GoogleNetworkServicesHttpRouteConfig" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteConfig: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.hostnames">hostnames</a></code> | <code>string[]</code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.name">name</a></code> | <code>string</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.gateways">gateways</a></code> | <code>string[]</code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#id GoogleNetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.meshes">meshes</a></code> | <code>string[]</code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#project GoogleNetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#hostnames GoogleNetworkServicesHttpRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#name GoogleNetworkServicesHttpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleNetworkServicesHttpRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#rules GoogleNetworkServicesHttpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#description GoogleNetworkServicesHttpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#gateways GoogleNetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#id GoogleNetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#labels GoogleNetworkServicesHttpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#meshes GoogleNetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#project GoogleNetworkServicesHttpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesHttpRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#timeouts GoogleNetworkServicesHttpRoute#timeouts}

---

### GoogleNetworkServicesHttpRouteRules <a name="GoogleNetworkServicesHttpRouteRules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRules: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.matches">matches</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]</code> | matches block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.action"></a>

```typescript
public readonly action: GoogleNetworkServicesHttpRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#action GoogleNetworkServicesHttpRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.matches"></a>

```typescript
public readonly matches: IResolvable | GoogleNetworkServicesHttpRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#matches GoogleNetworkServicesHttpRoute#matches}

---

### GoogleNetworkServicesHttpRouteRulesAction <a name="GoogleNetworkServicesHttpRouteRulesAction" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesAction: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestHeaderModifier">requestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | request_header_modifier block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy">requestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | request_mirror_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.responseHeaderModifier">responseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | response_header_modifier block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.timeout">timeout</a></code> | <code>string</code> | Specifies the timeout for selected route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `corsPolicy`<sup>Optional</sup> <a name="corsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.corsPolicy"></a>

```typescript
public readonly corsPolicy: GoogleNetworkServicesHttpRouteRulesActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#cors_policy GoogleNetworkServicesHttpRoute#cors_policy}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | GoogleNetworkServicesHttpRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#destinations GoogleNetworkServicesHttpRoute#destinations}

---

##### `faultInjectionPolicy`<sup>Optional</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy"></a>

```typescript
public readonly faultInjectionPolicy: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#fault_injection_policy GoogleNetworkServicesHttpRoute#fault_injection_policy}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.redirect"></a>

```typescript
public readonly redirect: GoogleNetworkServicesHttpRouteRulesActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#redirect GoogleNetworkServicesHttpRoute#redirect}

---

##### `requestHeaderModifier`<sup>Optional</sup> <a name="requestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestHeaderModifier"></a>

```typescript
public readonly requestHeaderModifier: GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

request_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#request_header_modifier GoogleNetworkServicesHttpRoute#request_header_modifier}

---

##### `requestMirrorPolicy`<sup>Optional</sup> <a name="requestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy"></a>

```typescript
public readonly requestMirrorPolicy: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

request_mirror_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#request_mirror_policy GoogleNetworkServicesHttpRoute#request_mirror_policy}

---

##### `responseHeaderModifier`<sup>Optional</sup> <a name="responseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.responseHeaderModifier"></a>

```typescript
public readonly responseHeaderModifier: GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

response_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#response_header_modifier GoogleNetworkServicesHttpRoute#response_header_modifier}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: GoogleNetworkServicesHttpRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#retry_policy GoogleNetworkServicesHttpRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#timeout GoogleNetworkServicesHttpRoute#timeout}

---

##### `urlRewrite`<sup>Optional</sup> <a name="urlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: GoogleNetworkServicesHttpRouteRulesActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#url_rewrite GoogleNetworkServicesHttpRoute#url_rewrite}

---

### GoogleNetworkServicesHttpRouteRulesActionCorsPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionCorsPolicy: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | Specifies the content for Access-Control-Allow-Headers header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | Specifies the content for Access-Control-Allow-Methods header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes">allowOriginRegexes</a></code> | <code>string[]</code> | Specifies the regular expression patterns that match allowed origins. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Specifies the content for Access-Control-Expose-Headers header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge">maxAge</a></code> | <code>string</code> | Specifies how long result of a preflight request can be cached in seconds. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_credentials GoogleNetworkServicesHttpRoute#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

Specifies the content for Access-Control-Allow-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_headers GoogleNetworkServicesHttpRoute#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

Specifies the content for Access-Control-Allow-Methods header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_methods GoogleNetworkServicesHttpRoute#allow_methods}

---

##### `allowOriginRegexes`<sup>Optional</sup> <a name="allowOriginRegexes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes"></a>

```typescript
public readonly allowOriginRegexes: string[];
```

- *Type:* string[]

Specifies the regular expression patterns that match allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_origin_regexes GoogleNetworkServicesHttpRoute#allow_origin_regexes}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

Specifies the list of origins that will be allowed to do CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_origins GoogleNetworkServicesHttpRoute#allow_origins}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#disabled GoogleNetworkServicesHttpRoute#disabled}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Specifies the content for Access-Control-Expose-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#expose_headers GoogleNetworkServicesHttpRoute#expose_headers}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

Specifies how long result of a preflight request can be cached in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#max_age GoogleNetworkServicesHttpRoute#max_age}

---

### GoogleNetworkServicesHttpRouteRulesActionDestinations <a name="GoogleNetworkServicesHttpRouteRulesActionDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionDestinations: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.serviceName">serviceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.weight">weight</a></code> | <code>number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#service_name GoogleNetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#weight GoogleNetworkServicesHttpRoute#weight}

---

### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```typescript
public readonly abort: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#abort GoogleNetworkServicesHttpRoute#abort}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```typescript
public readonly delay: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#delay GoogleNetworkServicesHttpRoute#delay}

---

### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">httpStatus</a></code> | <code>number</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic which will be aborted. |

---

##### `httpStatus`<sup>Optional</sup> <a name="httpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```typescript
public readonly httpStatus: number;
```

- *Type:* number

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#http_status GoogleNetworkServicesHttpRoute#http_status}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#percentage GoogleNetworkServicesHttpRoute#percentage}

---

### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">fixedDelay</a></code> | <code>string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic on which delay will be injected. |

---

##### `fixedDelay`<sup>Optional</sup> <a name="fixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```typescript
public readonly fixedDelay: string;
```

- *Type:* string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#fixed_delay GoogleNetworkServicesHttpRoute#fixed_delay}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#percentage GoogleNetworkServicesHttpRoute#percentage}

---

### GoogleNetworkServicesHttpRouteRulesActionRedirect <a name="GoogleNetworkServicesHttpRouteRulesActionRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionRedirect: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect">hostRedirect</a></code> | <code>string</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect">httpsRedirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect">pathRedirect</a></code> | <code>string</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.portRedirect">portRedirect</a></code> | <code>number</code> | The port that will be used in the redirected request instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite">prefixRewrite</a></code> | <code>string</code> | Indicates that during redirection, the matched prefix (or path) should be swapped with this value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.responseCode">responseCode</a></code> | <code>string</code> | The HTTP Status code to use for the redirect. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.stripQuery">stripQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `hostRedirect`<sup>Optional</sup> <a name="hostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect"></a>

```typescript
public readonly hostRedirect: string;
```

- *Type:* string

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#host_redirect GoogleNetworkServicesHttpRoute#host_redirect}

---

##### `httpsRedirect`<sup>Optional</sup> <a name="httpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect"></a>

```typescript
public readonly httpsRedirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the URL scheme in the redirected request is set to https.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#https_redirect GoogleNetworkServicesHttpRoute#https_redirect}

---

##### `pathRedirect`<sup>Optional</sup> <a name="pathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect"></a>

```typescript
public readonly pathRedirect: string;
```

- *Type:* string

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#path_redirect GoogleNetworkServicesHttpRoute#path_redirect}

---

##### `portRedirect`<sup>Optional</sup> <a name="portRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.portRedirect"></a>

```typescript
public readonly portRedirect: number;
```

- *Type:* number

The port that will be used in the redirected request instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#port_redirect GoogleNetworkServicesHttpRoute#port_redirect}

---

##### `prefixRewrite`<sup>Optional</sup> <a name="prefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite"></a>

```typescript
public readonly prefixRewrite: string;
```

- *Type:* string

Indicates that during redirection, the matched prefix (or path) should be swapped with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#prefix_rewrite GoogleNetworkServicesHttpRoute#prefix_rewrite}

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.responseCode"></a>

```typescript
public readonly responseCode: string;
```

- *Type:* string

The HTTP Status code to use for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#response_code GoogleNetworkServicesHttpRoute#response_code}

---

##### `stripQuery`<sup>Optional</sup> <a name="stripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.stripQuery"></a>

```typescript
public readonly stripQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#strip_query GoogleNetworkServicesHttpRoute#strip_query}

---

### GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier <a name="GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionRequestHeaderModifier: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove">remove</a></code> | <code>string[]</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#add GoogleNetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#remove GoogleNetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#set GoogleNetworkServicesHttpRoute#set}

---

### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination"></a>

```typescript
public readonly destination: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#destination GoogleNetworkServicesHttpRoute#destination}

---

### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName">serviceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight">weight</a></code> | <code>number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#service_name GoogleNetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#weight GoogleNetworkServicesHttpRoute#weight}

---

### GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier <a name="GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionResponseHeaderModifier: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove">remove</a></code> | <code>string[]</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#add GoogleNetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#remove GoogleNetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#set GoogleNetworkServicesHttpRoute#set}

---

### GoogleNetworkServicesHttpRouteRulesActionRetryPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionRetryPolicy: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries">numRetries</a></code> | <code>number</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout">perTryTimeout</a></code> | <code>string</code> | Specifies a non-zero timeout per retry attempt. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions">retryConditions</a></code> | <code>string[]</code> | Specifies one or more conditions when this retry policy applies. |

---

##### `numRetries`<sup>Optional</sup> <a name="numRetries" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#num_retries GoogleNetworkServicesHttpRoute#num_retries}

---

##### `perTryTimeout`<sup>Optional</sup> <a name="perTryTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout"></a>

```typescript
public readonly perTryTimeout: string;
```

- *Type:* string

Specifies a non-zero timeout per retry attempt.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#per_try_timeout GoogleNetworkServicesHttpRoute#per_try_timeout}

---

##### `retryConditions`<sup>Optional</sup> <a name="retryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions"></a>

```typescript
public readonly retryConditions: string[];
```

- *Type:* string[]

Specifies one or more conditions when this retry policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#retry_conditions GoogleNetworkServicesHttpRoute#retry_conditions}

---

### GoogleNetworkServicesHttpRouteRulesActionUrlRewrite <a name="GoogleNetworkServicesHttpRouteRulesActionUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesActionUrlRewrite: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite">hostRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. |

---

##### `hostRewrite`<sup>Optional</sup> <a name="hostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite"></a>

```typescript
public readonly hostRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#host_rewrite GoogleNetworkServicesHttpRoute#host_rewrite}

---

##### `pathPrefixRewrite`<sup>Optional</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite"></a>

```typescript
public readonly pathPrefixRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#path_prefix_rewrite GoogleNetworkServicesHttpRoute#path_prefix_rewrite}

---

### GoogleNetworkServicesHttpRouteRulesMatches <a name="GoogleNetworkServicesHttpRouteRulesMatches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesMatches: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.fullPathMatch">fullPathMatch</a></code> | <code>string</code> | The HTTP request path value should exactly match this value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.queryParameters">queryParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]</code> | query_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.regexMatch">regexMatch</a></code> | <code>string</code> | The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. |

---

##### `fullPathMatch`<sup>Optional</sup> <a name="fullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.fullPathMatch"></a>

```typescript
public readonly fullPathMatch: string;
```

- *Type:* string

The HTTP request path value should exactly match this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#full_path_match GoogleNetworkServicesHttpRoute#full_path_match}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.headers"></a>

```typescript
public readonly headers: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#headers GoogleNetworkServicesHttpRoute#headers}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#ignore_case GoogleNetworkServicesHttpRoute#ignore_case}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#prefix_match GoogleNetworkServicesHttpRoute#prefix_match}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#query_parameters GoogleNetworkServicesHttpRoute#query_parameters}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL.

For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#regex_match GoogleNetworkServicesHttpRoute#regex_match}

---

### GoogleNetworkServicesHttpRouteRulesMatchesHeaders <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesMatchesHeaders: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch">exactMatch</a></code> | <code>string</code> | The value of the header should match exactly the content of exactMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.header">header</a></code> | <code>string</code> | The name of the HTTP header to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch">invertMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | If specified, the match result will be inverted before checking. Default value is set to false. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | A header with headerName must exist. The match takes place whether or not the header has a value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch">rangeMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | range_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch">regexMatch</a></code> | <code>string</code> | The value of the header must match the regular expression specified in regexMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch">suffixMatch</a></code> | <code>string</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

The value of the header should match exactly the content of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#exact_match GoogleNetworkServicesHttpRoute#exact_match}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

The name of the HTTP header to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#header GoogleNetworkServicesHttpRoute#header}

---

##### `invertMatch`<sup>Optional</sup> <a name="invertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch"></a>

```typescript
public readonly invertMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If specified, the match result will be inverted before checking. Default value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#invert_match GoogleNetworkServicesHttpRoute#invert_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#prefix_match GoogleNetworkServicesHttpRoute#prefix_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A header with headerName must exist. The match takes place whether or not the header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#present_match GoogleNetworkServicesHttpRoute#present_match}

---

##### `rangeMatch`<sup>Optional</sup> <a name="rangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch"></a>

```typescript
public readonly rangeMatch: GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

range_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#range_match GoogleNetworkServicesHttpRoute#range_match}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

The value of the header must match the regular expression specified in regexMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#regex_match GoogleNetworkServicesHttpRoute#regex_match}

---

##### `suffixMatch`<sup>Optional</sup> <a name="suffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch"></a>

```typescript
public readonly suffixMatch: string;
```

- *Type:* string

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#suffix_match GoogleNetworkServicesHttpRoute#suffix_match}

---

### GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end">end</a></code> | <code>number</code> | End of the range (exclusive). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start">start</a></code> | <code>number</code> | Start of the range (inclusive). |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

End of the range (exclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#end GoogleNetworkServicesHttpRoute#end}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Start of the range (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#start GoogleNetworkServicesHttpRoute#start}

---

### GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters <a name="GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteRulesMatchesQueryParameters: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch">exactMatch</a></code> | <code>string</code> | The value of the query parameter must exactly match the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter">queryParameter</a></code> | <code>string</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch">regexMatch</a></code> | <code>string</code> | The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. |

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

The value of the query parameter must exactly match the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#exact_match GoogleNetworkServicesHttpRoute#exact_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#present_match GoogleNetworkServicesHttpRoute#present_match}

---

##### `queryParameter`<sup>Optional</sup> <a name="queryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter"></a>

```typescript
public readonly queryParameter: string;
```

- *Type:* string

The name of the query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#query_parameter GoogleNetworkServicesHttpRoute#query_parameter}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#regex_match GoogleNetworkServicesHttpRoute#regex_match}

---

### GoogleNetworkServicesHttpRouteTimeouts <a name="GoogleNetworkServicesHttpRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

const googleNetworkServicesHttpRouteTimeouts: googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#create GoogleNetworkServicesHttpRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#delete GoogleNetworkServicesHttpRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#update GoogleNetworkServicesHttpRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#create GoogleNetworkServicesHttpRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#delete GoogleNetworkServicesHttpRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#update GoogleNetworkServicesHttpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes">resetAllowOriginRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```typescript
public resetAllowHeaders(): void
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods"></a>

```typescript
public resetAllowMethods(): void
```

##### `resetAllowOriginRegexes` <a name="resetAllowOriginRegexes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes"></a>

```typescript
public resetAllowOriginRegexes(): void
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```typescript
public resetAllowOrigins(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput">allowOriginRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes">allowOriginRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge">maxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```typescript
public readonly allowHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```typescript
public readonly allowMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowOriginRegexesInput`<sup>Optional</sup> <a name="allowOriginRegexesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput"></a>

```typescript
public readonly allowOriginRegexesInput: string[];
```

- *Type:* string[]

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```typescript
public readonly allowOriginsInput: string[];
```

- *Type:* string[]

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: string;
```

- *Type:* string

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOriginRegexes`<sup>Required</sup> <a name="allowOriginRegexes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes"></a>

```typescript
public readonly allowOriginRegexes: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionDestinationsList <a name="GoogleNetworkServicesHttpRouteRulesActionDestinationsList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]

---


### GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesActionDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>

---


### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">resetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpStatus` <a name="resetHttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```typescript
public resetHttpStatus(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">httpStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">httpStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpStatusInput`<sup>Optional</sup> <a name="httpStatusInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```typescript
public readonly httpStatusInput: number;
```

- *Type:* number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `httpStatus`<sup>Required</sup> <a name="httpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```typescript
public readonly httpStatus: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---


### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">resetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedDelay` <a name="resetFixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```typescript
public resetFixedDelay(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">fixedDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">fixedDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedDelayInput`<sup>Optional</sup> <a name="fixedDelayInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```typescript
public readonly fixedDelayInput: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `fixedDelay`<sup>Required</sup> <a name="fixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```typescript
public readonly fixedDelay: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---


### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">putAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">putDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">resetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">resetDelay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbort` <a name="putAbort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```typescript
public putAbort(value: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `putDelay` <a name="putDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```typescript
public putDelay(value: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `resetAbort` <a name="resetAbort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```typescript
public resetAbort(): void
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">abortInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">delayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abort`<sup>Required</sup> <a name="abort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```typescript
public readonly abort: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```typescript
public readonly delay: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `abortInput`<sup>Optional</sup> <a name="abortInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```typescript
public readonly abortInput: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy">putCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy">putFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier">putRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy">putRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier">putResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite">putUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy">resetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy">resetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier">resetRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy">resetRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier">resetResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite">resetUrlRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsPolicy` <a name="putCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy"></a>

```typescript
public putCorsPolicy(value: GoogleNetworkServicesHttpRouteRulesActionCorsPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | GoogleNetworkServicesHttpRouteRulesActionDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]

---

##### `putFaultInjectionPolicy` <a name="putFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```typescript
public putFaultInjectionPolicy(value: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: GoogleNetworkServicesHttpRouteRulesActionRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `putRequestHeaderModifier` <a name="putRequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier"></a>

```typescript
public putRequestHeaderModifier(value: GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `putRequestMirrorPolicy` <a name="putRequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy"></a>

```typescript
public putRequestMirrorPolicy(value: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `putResponseHeaderModifier` <a name="putResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier"></a>

```typescript
public putResponseHeaderModifier(value: GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: GoogleNetworkServicesHttpRouteRulesActionRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `putUrlRewrite` <a name="putUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite"></a>

```typescript
public putUrlRewrite(value: GoogleNetworkServicesHttpRouteRulesActionUrlRewrite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `resetCorsPolicy` <a name="resetCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy"></a>

```typescript
public resetCorsPolicy(): void
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetFaultInjectionPolicy` <a name="resetFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```typescript
public resetFaultInjectionPolicy(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```

##### `resetRequestHeaderModifier` <a name="resetRequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier"></a>

```typescript
public resetRequestHeaderModifier(): void
```

##### `resetRequestMirrorPolicy` <a name="resetRequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy"></a>

```typescript
public resetRequestMirrorPolicy(): void
```

##### `resetResponseHeaderModifier` <a name="resetResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier"></a>

```typescript
public resetResponseHeaderModifier(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUrlRewrite` <a name="resetUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite"></a>

```typescript
public resetUrlRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList">GoogleNetworkServicesHttpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference">GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier">requestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy">requestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier">responseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput">corsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput">faultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput">requestHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput">requestMirrorPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput">responseHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput">urlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `corsPolicy`<sup>Required</sup> <a name="corsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy"></a>

```typescript
public readonly corsPolicy: GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinations"></a>

```typescript
public readonly destinations: GoogleNetworkServicesHttpRouteRulesActionDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList">GoogleNetworkServicesHttpRouteRulesActionDestinationsList</a>

---

##### `faultInjectionPolicy`<sup>Required</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```typescript
public readonly faultInjectionPolicy: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirect"></a>

```typescript
public readonly redirect: GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference">GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference</a>

---

##### `requestHeaderModifier`<sup>Required</sup> <a name="requestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier"></a>

```typescript
public readonly requestHeaderModifier: GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a>

---

##### `requestMirrorPolicy`<sup>Required</sup> <a name="requestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy"></a>

```typescript
public readonly requestMirrorPolicy: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a>

---

##### `responseHeaderModifier`<sup>Required</sup> <a name="responseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier"></a>

```typescript
public readonly responseHeaderModifier: GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a>

---

##### `urlRewrite`<sup>Required</sup> <a name="urlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a>

---

##### `corsPolicyInput`<sup>Optional</sup> <a name="corsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput"></a>

```typescript
public readonly corsPolicyInput: GoogleNetworkServicesHttpRouteRulesActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | GoogleNetworkServicesHttpRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations">GoogleNetworkServicesHttpRouteRulesActionDestinations</a>[]

---

##### `faultInjectionPolicyInput`<sup>Optional</sup> <a name="faultInjectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```typescript
public readonly faultInjectionPolicyInput: GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: GoogleNetworkServicesHttpRouteRulesActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `requestHeaderModifierInput`<sup>Optional</sup> <a name="requestHeaderModifierInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput"></a>

```typescript
public readonly requestHeaderModifierInput: GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `requestMirrorPolicyInput`<sup>Optional</sup> <a name="requestMirrorPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput"></a>

```typescript
public readonly requestMirrorPolicyInput: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `responseHeaderModifierInput`<sup>Optional</sup> <a name="responseHeaderModifierInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput"></a>

```typescript
public readonly responseHeaderModifierInput: GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: GoogleNetworkServicesHttpRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `urlRewriteInput`<sup>Optional</sup> <a name="urlRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput"></a>

```typescript
public readonly urlRewriteInput: GoogleNetworkServicesHttpRouteRulesActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect">resetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect">resetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect">resetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect">resetPortRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite">resetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery">resetStripQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRedirect` <a name="resetHostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect"></a>

```typescript
public resetHostRedirect(): void
```

##### `resetHttpsRedirect` <a name="resetHttpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect"></a>

```typescript
public resetHttpsRedirect(): void
```

##### `resetPathRedirect` <a name="resetPathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect"></a>

```typescript
public resetPathRedirect(): void
```

##### `resetPortRedirect` <a name="resetPortRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect"></a>

```typescript
public resetPortRedirect(): void
```

##### `resetPrefixRewrite` <a name="resetPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite"></a>

```typescript
public resetPrefixRewrite(): void
```

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode"></a>

```typescript
public resetResponseCode(): void
```

##### `resetStripQuery` <a name="resetStripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery"></a>

```typescript
public resetStripQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput">hostRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput">httpsRedirectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput">pathRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput">portRedirectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput">prefixRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput">stripQueryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect">hostRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect">httpsRedirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect">pathRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect">portRedirect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite">prefixRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode">responseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery">stripQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRedirectInput`<sup>Optional</sup> <a name="hostRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput"></a>

```typescript
public readonly hostRedirectInput: string;
```

- *Type:* string

---

##### `httpsRedirectInput`<sup>Optional</sup> <a name="httpsRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput"></a>

```typescript
public readonly httpsRedirectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathRedirectInput`<sup>Optional</sup> <a name="pathRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput"></a>

```typescript
public readonly pathRedirectInput: string;
```

- *Type:* string

---

##### `portRedirectInput`<sup>Optional</sup> <a name="portRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput"></a>

```typescript
public readonly portRedirectInput: number;
```

- *Type:* number

---

##### `prefixRewriteInput`<sup>Optional</sup> <a name="prefixRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput"></a>

```typescript
public readonly prefixRewriteInput: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: string;
```

- *Type:* string

---

##### `stripQueryInput`<sup>Optional</sup> <a name="stripQueryInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput"></a>

```typescript
public readonly stripQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostRedirect`<sup>Required</sup> <a name="hostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect"></a>

```typescript
public readonly hostRedirect: string;
```

- *Type:* string

---

##### `httpsRedirect`<sup>Required</sup> <a name="httpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect"></a>

```typescript
public readonly httpsRedirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathRedirect`<sup>Required</sup> <a name="pathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect"></a>

```typescript
public readonly pathRedirect: string;
```

- *Type:* string

---

##### `portRedirect`<sup>Required</sup> <a name="portRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect"></a>

```typescript
public readonly portRedirect: number;
```

- *Type:* number

---

##### `prefixRewrite`<sup>Required</sup> <a name="prefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite"></a>

```typescript
public readonly prefixRewrite: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: string;
```

- *Type:* string

---

##### `stripQuery`<sup>Required</sup> <a name="stripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery"></a>

```typescript
public readonly stripQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination"></a>

```typescript
public putDestination(value: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination"></a>

```typescript
public readonly destination: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries">resetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout">resetPerTryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">resetRetryConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumRetries` <a name="resetNumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```typescript
public resetNumRetries(): void
```

##### `resetPerTryTimeout` <a name="resetPerTryTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout"></a>

```typescript
public resetPerTryTimeout(): void
```

##### `resetRetryConditions` <a name="resetRetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```typescript
public resetRetryConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">numRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput">perTryTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">retryConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout">perTryTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions">retryConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numRetriesInput`<sup>Optional</sup> <a name="numRetriesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```typescript
public readonly numRetriesInput: number;
```

- *Type:* number

---

##### `perTryTimeoutInput`<sup>Optional</sup> <a name="perTryTimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput"></a>

```typescript
public readonly perTryTimeoutInput: string;
```

- *Type:* string

---

##### `retryConditionsInput`<sup>Optional</sup> <a name="retryConditionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```typescript
public readonly retryConditionsInput: string[];
```

- *Type:* string[]

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `perTryTimeout`<sup>Required</sup> <a name="perTryTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout"></a>

```typescript
public readonly perTryTimeout: string;
```

- *Type:* string

---

##### `retryConditions`<sup>Required</sup> <a name="retryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```typescript
public readonly retryConditions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite">resetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite">resetPathPrefixRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRewrite` <a name="resetHostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite"></a>

```typescript
public resetHostRewrite(): void
```

##### `resetPathPrefixRewrite` <a name="resetPathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```typescript
public resetPathPrefixRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput">hostRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">pathPrefixRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite">hostRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRewriteInput`<sup>Optional</sup> <a name="hostRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```typescript
public readonly hostRewriteInput: string;
```

- *Type:* string

---

##### `pathPrefixRewriteInput`<sup>Optional</sup> <a name="pathPrefixRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```typescript
public readonly pathPrefixRewriteInput: string;
```

- *Type:* string

---

##### `hostRewrite`<sup>Required</sup> <a name="hostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite"></a>

```typescript
public readonly hostRewrite: string;
```

- *Type:* string

---

##### `pathPrefixRewrite`<sup>Required</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```typescript
public readonly pathPrefixRewrite: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

---


### GoogleNetworkServicesHttpRouteRulesList <a name="GoogleNetworkServicesHttpRouteRulesList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesHttpRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>[]

---


### GoogleNetworkServicesHttpRouteRulesMatchesHeadersList <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]

---


### GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch">putRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch">resetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch">resetRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch">resetSuffixMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRangeMatch` <a name="putRangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch"></a>

```typescript
public putRangeMatch(value: GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetInvertMatch` <a name="resetInvertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch"></a>

```typescript
public resetInvertMatch(): void
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch"></a>

```typescript
public resetPrefixMatch(): void
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch"></a>

```typescript
public resetPresentMatch(): void
```

##### `resetRangeMatch` <a name="resetRangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch"></a>

```typescript
public resetRangeMatch(): void
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch"></a>

```typescript
public resetRegexMatch(): void
```

##### `resetSuffixMatch` <a name="resetSuffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch"></a>

```typescript
public resetSuffixMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch">rangeMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput">invertMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput">rangeMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput">suffixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch">exactMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch">invertMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch">regexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch">suffixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rangeMatch`<sup>Required</sup> <a name="rangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch"></a>

```typescript
public readonly rangeMatch: GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a>

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `invertMatchInput`<sup>Optional</sup> <a name="invertMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput"></a>

```typescript
public readonly invertMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput"></a>

```typescript
public readonly prefixMatchInput: string;
```

- *Type:* string

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput"></a>

```typescript
public readonly presentMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeMatchInput`<sup>Optional</sup> <a name="rangeMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput"></a>

```typescript
public readonly rangeMatchInput: GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput"></a>

```typescript
public readonly regexMatchInput: string;
```

- *Type:* string

---

##### `suffixMatchInput`<sup>Optional</sup> <a name="suffixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput"></a>

```typescript
public readonly suffixMatchInput: string;
```

- *Type:* string

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `invertMatch`<sup>Required</sup> <a name="invertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch"></a>

```typescript
public readonly invertMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

---

##### `suffixMatch`<sup>Required</sup> <a name="suffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch"></a>

```typescript
public readonly suffixMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>

---


### GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---


### GoogleNetworkServicesHttpRouteRulesMatchesList <a name="GoogleNetworkServicesHttpRouteRulesMatchesList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesHttpRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]

---


### GoogleNetworkServicesHttpRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters">putQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch">resetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]

---

##### `putQueryParameters` <a name="putQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters"></a>

```typescript
public putQueryParameters(value: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

---

##### `resetFullPathMatch` <a name="resetFullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch"></a>

```typescript
public resetFullPathMatch(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch"></a>

```typescript
public resetPrefixMatch(): void
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch"></a>

```typescript
public resetRegexMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList">GoogleNetworkServicesHttpRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList">GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput">fullPathMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch">fullPathMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch">regexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headers"></a>

```typescript
public readonly headers: GoogleNetworkServicesHttpRouteRulesMatchesHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList">GoogleNetworkServicesHttpRouteRulesMatchesHeadersList</a>

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters"></a>

```typescript
public readonly queryParameters: GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList">GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList</a>

---

##### `fullPathMatchInput`<sup>Optional</sup> <a name="fullPathMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput"></a>

```typescript
public readonly fullPathMatchInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders">GoogleNetworkServicesHttpRouteRulesMatchesHeaders</a>[]

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput"></a>

```typescript
public readonly prefixMatchInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput"></a>

```typescript
public readonly regexMatchInput: string;
```

- *Type:* string

---

##### `fullPathMatch`<sup>Required</sup> <a name="fullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch"></a>

```typescript
public readonly fullPathMatch: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesMatches;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>

---


### GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList <a name="GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

---


### GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter">resetQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch"></a>

```typescript
public resetPresentMatch(): void
```

##### `resetQueryParameter` <a name="resetQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter"></a>

```typescript
public resetQueryParameter(): void
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch"></a>

```typescript
public resetRegexMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput">queryParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch">exactMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter">queryParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch">regexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string;
```

- *Type:* string

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput"></a>

```typescript
public readonly presentMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryParameterInput`<sup>Optional</sup> <a name="queryParameterInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput"></a>

```typescript
public readonly queryParameterInput: string;
```

- *Type:* string

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput"></a>

```typescript
public readonly regexMatchInput: string;
```

- *Type:* string

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryParameter`<sup>Required</sup> <a name="queryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter"></a>

```typescript
public readonly queryParameter: string;
```

- *Type:* string

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters">GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters</a>

---


### GoogleNetworkServicesHttpRouteRulesOutputReference <a name="GoogleNetworkServicesHttpRouteRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putMatches">putMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetMatches">resetMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putAction"></a>

```typescript
public putAction(value: GoogleNetworkServicesHttpRouteRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

---

##### `putMatches` <a name="putMatches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putMatches"></a>

```typescript
public putMatches(value: IResolvable | GoogleNetworkServicesHttpRouteRulesMatches[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMatches` <a name="resetMatches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetMatches"></a>

```typescript
public resetMatches(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference">GoogleNetworkServicesHttpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList">GoogleNetworkServicesHttpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matchesInput">matchesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.action"></a>

```typescript
public readonly action: GoogleNetworkServicesHttpRouteRulesActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference">GoogleNetworkServicesHttpRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matches"></a>

```typescript
public readonly matches: GoogleNetworkServicesHttpRouteRulesMatchesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList">GoogleNetworkServicesHttpRouteRulesMatchesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: GoogleNetworkServicesHttpRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

---

##### `matchesInput`<sup>Optional</sup> <a name="matchesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matchesInput"></a>

```typescript
public readonly matchesInput: IResolvable | GoogleNetworkServicesHttpRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches">GoogleNetworkServicesHttpRouteRulesMatches</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules">GoogleNetworkServicesHttpRouteRules</a>

---


### GoogleNetworkServicesHttpRouteTimeoutsOutputReference <a name="GoogleNetworkServicesHttpRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesHttpRoute } from '@cdktf/provider-google-beta'

new googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesHttpRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a>

---



